import { useState } from 'react';
import {
  Card, CardContent, Typography, Box, Chip, Button,
  Radio, RadioGroup, FormControlLabel, FormControl,
  TextField, Divider, Alert, useTheme, Paper
} from '@mui/material';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Exercise, MultipleChoiceExercise, FillInBlankExercise, CalculationExercise } from '../../types/calculus';
import { addToWrongExercises, removeFromWrongExercises } from '../../data/exercisesData';

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete?: (exerciseId: string, isCorrect: boolean) => void;
}

const ExerciseCard = ({ exercise, onComplete }: ExerciseCardProps) => {
  const theme = useTheme();
  const [userAnswer, setUserAnswer] = useState<string | string[]>('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // 根据难度级别获取颜色
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return theme.palette.success.main;
      case 'medium': return theme.palette.warning.main;
      case 'hard': return theme.palette.error.main;
      default: return theme.palette.primary.main;
    }
  };

  // 获取难度中文名称
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  // 检查答案是否正确
  const checkAnswer = () => {
    let correct = false;

    switch (exercise.type) {
      case 'multipleChoice':
        correct = userAnswer === (exercise as MultipleChoiceExercise).correctOptionId;
        break;
      case 'fillInBlank':
        const fillExercise = exercise as FillInBlankExercise;
        if (Array.isArray(userAnswer)) {
          correct = userAnswer.every((ans, index) => 
            ans.trim() === fillExercise.blanks[index].trim());
        }
        break;
      case 'calculation':
        const calcExercise = exercise as CalculationExercise;
        const userAnsStr = String(userAnswer).trim();
        const correctAnsStr = calcExercise.answer.trim();
        
        // 如果有可接受的误差范围，则进行数值比较
        if (calcExercise.acceptableError !== undefined) {
          try {
            const userNum = parseFloat(userAnsStr);
            const correctNum = parseFloat(correctAnsStr);
            correct = Math.abs(userNum - correctNum) <= calcExercise.acceptableError;
          } catch (e) {
            correct = false;
          }
        } else {
          // 否则进行精确字符串比较
          correct = userAnsStr === correctAnsStr;
        }
        break;
    }

    setIsCorrect(correct);
    setSubmitted(true);
    setShowExplanation(true);
    
    // 根据答题结果更新错题集
    if (correct) {
      removeFromWrongExercises(exercise.id);
    } else {
      addToWrongExercises(exercise.id);
    }

    // 调用完成回调
    if (onComplete) {
      onComplete(exercise.id, correct);
    }
  };

  // 重置答题状态
  const resetExercise = () => {
    setUserAnswer('');
    setSubmitted(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  // 渲染选择题
  const renderMultipleChoice = (exercise: MultipleChoiceExercise) => {
    return (
      <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
        <RadioGroup
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        >
          {exercise.options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Radio />}
              label={<Latex>{option.text}</Latex>}
              disabled={submitted}
              sx={{
                mb: 1,
                p: 1,
                borderRadius: 1,
                ...(submitted && option.id === exercise.correctOptionId ? {
                  bgcolor: 'success.light',
                  color: 'success.contrastText',
                } : {}),
                ...(submitted && userAnswer === option.id && !option.isCorrect ? {
                  bgcolor: 'error.light',
                  color: 'error.contrastText',
                } : {}),
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

  // 渲染填空题
  const renderFillInBlank = (exercise: FillInBlankExercise) => {
    // 将问题文本按照空白符号分割
    const parts = exercise.problem.split('_____');
    
    // 初始化答案数组
    if (!Array.isArray(userAnswer)) {
      setUserAnswer(Array(exercise.blanks.length).fill(''));
    }

    return (
      <Box sx={{ mt: 2 }}>
        {parts.map((part, index) => (
          <Box key={index} sx={{ display: 'inline' }}>
            <Latex>{part}</Latex>
            {index < parts.length - 1 && (
              <TextField
                variant="outlined"
                size="small"
                value={Array.isArray(userAnswer) ? userAnswer[index] || '' : ''}
                onChange={(e) => {
                  if (Array.isArray(userAnswer)) {
                    const newAnswers = [...userAnswer];
                    newAnswers[index] = e.target.value;
                    setUserAnswer(newAnswers);
                  }
                }}
                disabled={submitted}
                sx={{ 
                  width: '100px',
                  mx: 1,
                  ...(submitted ? {
                    bgcolor: Array.isArray(userAnswer) && 
                      userAnswer[index] === exercise.blanks[index] ? 
                      'success.light' : 'error.light'
                  } : {})
                }}
              />
            )}
          </Box>
        ))}

        {submitted && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">正确答案：</Typography>
            {exercise.blanks.map((blank, index) => (
              <Chip 
                key={index} 
                label={<Latex>{blank}</Latex>} 
                color="primary" 
                sx={{ mr: 1, mt: 1 }}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  };

  // 渲染计算题
  const renderCalculation = (exercise: CalculationExercise) => {
    return (
      <Box sx={{ mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="你的答案"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={submitted}
          sx={{
            ...(submitted ? {
              '& .MuiOutlinedInput-root': {
                bgcolor: isCorrect ? 'success.light' : 'error.light',
              }
            } : {})
          }}
        />

        {submitted && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">正确答案：</Typography>
            <Chip 
              label={<Latex>{exercise.answer}</Latex>} 
              color="primary" 
              sx={{ mt: 1 }}
            />
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        mb: 4, 
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          p: 2,
          background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AssignmentIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="h3">
            {exercise.title}
          </Typography>
        </Box>
        <Chip 
          label={getDifficultyLabel(exercise.difficulty)}
          sx={{ 
            bgcolor: getDifficultyColor(exercise.difficulty),
            color: 'white',
            fontWeight: 'bold'
          }}
          size="small"
        />
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <Latex>{exercise.problem}</Latex>
        </Typography>

        {/* 根据题目类型渲染不同的答题界面 */}
        {exercise.type === 'multipleChoice' && renderMultipleChoice(exercise as MultipleChoiceExercise)}
        {exercise.type === 'fillInBlank' && renderFillInBlank(exercise as FillInBlankExercise)}
        {exercise.type === 'calculation' && renderCalculation(exercise as CalculationExercise)}

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          {!submitted ? (
            <Button 
              variant="contained" 
              color="primary" 
              onClick={checkAnswer}
              disabled={!userAnswer || (Array.isArray(userAnswer) && userAnswer.some(a => !a))}
            >
              提交答案
            </Button>
          ) : (
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={resetExercise}
            >
              重新作答
            </Button>
          )}

          {submitted && (
            <Button 
              variant="outlined" 
              color={showExplanation ? "secondary" : "primary"}
              onClick={() => setShowExplanation(!showExplanation)}
            >
              {showExplanation ? "隐藏解析" : "查看解析"}
            </Button>
          )}
        </Box>

        {submitted && (
          <Alert 
            severity={isCorrect ? "success" : "error"}
            icon={isCorrect ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
            sx={{ mt: 2 }}
          >
            {isCorrect ? "回答正确！" : "回答错误，请查看解析或重新作答。"}
          </Alert>
        )}

        {showExplanation && (
          <Paper elevation={0} sx={{ mt: 3, p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              解题思路与解析
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <Latex>{exercise.explanation}</Latex>
            </Typography>
          </Paper>
        )}
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;