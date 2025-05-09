import { useState } from 'react';
import {
  Box, Typography, Tabs, Tab, Chip, Grid, Card, CardContent,
  CardActionArea, useTheme, Divider, Badge, Button
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CalculateIcon from '@mui/icons-material/Calculate';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Exercise } from '../../types/calculus';
import { getWrongExercises } from '../../data/exercisesData';

interface ExerciseListProps {
  exercises: Exercise[];
  onSelectExercise: (exercise: Exercise) => void;
}

const ExerciseList = ({ exercises, onSelectExercise }: ExerciseListProps) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const wrongExerciseIds = getWrongExercises();

  // 按类型过滤练习题
  const filterExercises = () => {
    if (tabValue === 0) return exercises;
    if (tabValue === 1) return exercises.filter(ex => ex.type === 'multipleChoice');
    if (tabValue === 2) return exercises.filter(ex => ex.type === 'fillInBlank');
    if (tabValue === 3) return exercises.filter(ex => ex.type === 'calculation');
    if (tabValue === 4) return exercises.filter(ex => wrongExerciseIds.includes(ex.id));
    return exercises;
  };

  // 获取题目类型的图标
  const getExerciseTypeIcon = (type: string) => {
    switch (type) {
      case 'multipleChoice': return <QuizIcon color="primary" />;
      case 'fillInBlank': return <TextFieldsIcon color="secondary" />;
      case 'calculation': return <CalculateIcon sx={{ color: theme.palette.warning.main }} />;
      default: return <AssignmentIcon color="primary" />;
    }
  };

  // 获取题目类型的中文名称
  const getExerciseTypeName = (type: string) => {
    switch (type) {
      case 'multipleChoice': return '选择题';
      case 'fillInBlank': return '填空题';
      case 'calculation': return '计算题';
      default: return '未知类型';
    }
  };

  // 获取难度级别的颜色
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

  const filteredExercises = filterExercises();

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={(_, newValue) => setTabValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AssignmentIcon sx={{ mr: 1 }} />
                <span>全部</span>
                <Chip 
                  label={exercises.length} 
                  size="small" 
                  sx={{ ml: 1, height: 20, minWidth: 20 }} 
                />
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <QuizIcon sx={{ mr: 1 }} />
                <span>选择题</span>
                <Chip 
                  label={exercises.filter(ex => ex.type === 'multipleChoice').length} 
                  size="small" 
                  sx={{ ml: 1, height: 20, minWidth: 20 }} 
                />
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextFieldsIcon sx={{ mr: 1 }} />
                <span>填空题</span>
                <Chip 
                  label={exercises.filter(ex => ex.type === 'fillInBlank').length} 
                  size="small" 
                  sx={{ ml: 1, height: 20, minWidth: 20 }} 
                />
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalculateIcon sx={{ mr: 1 }} />
                <span>计算题</span>
                <Chip 
                  label={exercises.filter(ex => ex.type === 'calculation').length} 
                  size="small" 
                  sx={{ ml: 1, height: 20, minWidth: 20 }} 
                />
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BookmarkIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                <span>错题集</span>
                <Chip 
                  label={exercises.filter(ex => wrongExerciseIds.includes(ex.id)).length} 
                  size="small" 
                  color="error"
                  sx={{ ml: 1, height: 20, minWidth: 20 }} 
                />
              </Box>
            } 
          />
        </Tabs>
      </Box>

      {filteredExercises.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="subtitle1" color="text.secondary">
            {tabValue === 4 ? '暂无错题记录' : '暂无练习题'}
          </Typography>
          {tabValue === 4 && (
            <Button 
              variant="outlined" 
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => setTabValue(0)}
            >
              浏览所有题目
            </Button>
          )}
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredExercises.map((exercise) => (
            <Grid item xs={12} sm={6} md={4} key={exercise.id}>
              <Card 
                elevation={2} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardActionArea 
                  onClick={() => onSelectExercise(exercise)}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardContent sx={{ p: 2, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      {getExerciseTypeIcon(exercise.type)}
                      <Badge 
                        color="error" 
                        variant="dot" 
                        invisible={!wrongExerciseIds.includes(exercise.id)}
                      >
                        <Chip 
                          label={getDifficultyLabel(exercise.difficulty)}
                          size="small"
                          sx={{ 
                            bgcolor: getDifficultyColor(exercise.difficulty),
                            color: 'white',
                            fontWeight: 'bold'
                          }}
                        />
                      </Badge>
                    </Box>
                    
                    <Typography variant="subtitle1" component="h3" gutterBottom noWrap>
                      {exercise.title}
                    </Typography>
                    
                    <Divider sx={{ my: 1 }} />
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {exercise.problem.replace(/\$.*?\$/g, '[数学公式]')}
                    </Typography>
                  </CardContent>
                  
                  <Box sx={{ 
                    p: 1, 
                    bgcolor: 'action.hover', 
                    borderTop: '1px solid', 
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Chip 
                      label={getExerciseTypeName(exercise.type)} 
                      size="small" 
                      variant="outlined"
                    />
                    <Typography variant="caption" color="text.secondary">
                      ID: {exercise.id.split('-').pop()}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ExerciseList;