import { ChapterExercises } from '../types/calculus';

// 章节练习题数据
const chapterExercises: ChapterExercises[] = [
  {
    chapterId: 'limits',
    exercises: [
      {
        id: 'ex-limits-mc-1',
        type: 'multipleChoice',
        title: '极限概念理解',
        problem: '以下哪个表达式正确表示函数$f(x) = x^2$在点$x=3$处的极限？',
        difficulty: 'easy',
        relatedConceptIds: ['limit-definition'],
        options: [
          { id: 'opt1', text: '$\\lim_{x \\to 3} x^2 = 9$', isCorrect: true },
          { id: 'opt2', text: '$\\lim_{x \\to 3} x^2 = 6$', isCorrect: false },
          { id: 'opt3', text: '$\\lim_{x \\to 3} x^2 = 3$', isCorrect: false },
          { id: 'opt4', text: '$\\lim_{x \\to 3} x^2 = \\infty$', isCorrect: false },
        ],
        correctOptionId: 'opt1',
        explanation: '函数$f(x) = x^2$在$x=3$处的极限是将$x=3$代入函数得到$f(3) = 3^2 = 9$。'
      },
      {
        id: 'ex-limits-fb-1',
        type: 'fillInBlank',
        title: '基本极限计算',
        problem: '计算极限：$\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\_\\_\\_\\_\\_$',
        difficulty: 'medium',
        relatedConceptIds: ['limit-definition'],
        blanks: ['1'],
        explanation: '这是一个重要的基本极限。当$x$趋近于0时，$\\frac{\\sin x}{x}$的极限值为1。这可以通过几何方法或使用洛必达法则证明。'
      },
      {
        id: 'ex-limits-calc-1',
        type: 'calculation',
        title: '极限计算',
        problem: '计算极限：$\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$',
        difficulty: 'medium',
        relatedConceptIds: ['limit-definition'],
        answer: '4',
        explanation: '这个极限形式为$\\frac{0}{0}$，是不定式。我们可以通过因式分解来解决：\n$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$'
      }
    ]
  },
  {
    chapterId: 'derivatives',
    exercises: [
      {
        id: 'ex-derivatives-mc-1',
        type: 'multipleChoice',
        title: '导数概念',
        problem: '函数$f(x) = x^3$在点$x=2$处的导数值是多少？',
        difficulty: 'easy',
        relatedConceptIds: ['derivative-definition'],
        options: [
          { id: 'opt1', text: '$f\'(2) = 6$', isCorrect: false },
          { id: 'opt2', text: '$f\'(2) = 8$', isCorrect: false },
          { id: 'opt3', text: '$f\'(2) = 12$', isCorrect: true },
          { id: 'opt4', text: '$f\'(2) = 4$', isCorrect: false },
        ],
        correctOptionId: 'opt3',
        explanation: '函数$f(x) = x^3$的导数是$f\'(x) = 3x^2$。在$x=2$处，$f\'(2) = 3 \\cdot 2^2 = 3 \\cdot 4 = 12$。'
      },
      {
        id: 'ex-derivatives-fb-1',
        type: 'fillInBlank',
        title: '导数计算',
        problem: '求函数$f(x) = \\sin(2x)$的导数：$f\'(x) = \\_\\_\\_\\_\\_$',
        difficulty: 'medium',
        relatedConceptIds: ['derivative-rules'],
        blanks: ['2\\cos(2x)'],
        explanation: '使用链式法则：$f\'(x) = \\cos(2x) \\cdot 2 = 2\\cos(2x)$'
      },
      {
        id: 'ex-derivatives-calc-1',
        type: 'calculation',
        title: '切线方程',
        problem: '求函数$f(x) = x^2 - 3x + 2$在点$x=2$处的切线方程。',
        difficulty: 'hard',
        relatedConceptIds: ['derivative-applications'],
        answer: 'y = x - 2',
        explanation: '首先计算$f(2) = 2^2 - 3 \\cdot 2 + 2 = 4 - 6 + 2 = 0$\n然后计算导数$f\'(x) = 2x - 3$，在$x=2$处，$f\'(2) = 2 \\cdot 2 - 3 = 1$\n切线方程为：$y - f(2) = f\'(2)(x - 2)$，即$y - 0 = 1 \\cdot (x - 2)$，简化得$y = x - 2$'
      }
    ]
  },
  {
    chapterId: 'integrals',
    exercises: [
      {
        id: 'ex-integrals-mc-1',
        type: 'multipleChoice',
        title: '不定积分',
        problem: '下列哪个是函数$f(x) = 2x$的不定积分？',
        difficulty: 'easy',
        relatedConceptIds: ['indefinite-integral'],
        options: [
          { id: 'opt1', text: '$\\int 2x \\, dx = x^2 + C$', isCorrect: true },
          { id: 'opt2', text: '$\\int 2x \\, dx = 2x^2 + C$', isCorrect: false },
          { id: 'opt3', text: '$\\int 2x \\, dx = x + C$', isCorrect: false },
          { id: 'opt4', text: '$\\int 2x \\, dx = 2 \\ln|x| + C$', isCorrect: false },
        ],
        correctOptionId: 'opt1',
        explanation: '$\\int 2x \\, dx = 2 \\int x \\, dx = 2 \\cdot \\frac{x^2}{2} + C = x^2 + C$'
      },
      {
        id: 'ex-integrals-fb-1',
        type: 'fillInBlank',
        title: '定积分计算',
        problem: '计算定积分：$\\int_{0}^{1} x^2 \\, dx = \\_\\_\\_\\_\\_$',
        difficulty: 'medium',
        relatedConceptIds: ['definite-integral'],
        blanks: ['1/3'],
        explanation: '$\\int_{0}^{1} x^2 \\, dx = [\\frac{x^3}{3}]_{0}^{1} = \\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3}$'
      },
      {
        id: 'ex-integrals-calc-1',
        type: 'calculation',
        title: '面积计算',
        problem: '计算曲线$y = x^2$和直线$y = 2x$之间的封闭区域的面积。',
        difficulty: 'hard',
        relatedConceptIds: ['integral-applications'],
        answer: '1/3',
        explanation: '首先找出交点：$x^2 = 2x$，即$x^2 - 2x = 0$，$x(x-2) = 0$，所以$x=0$或$x=2$\n然后计算面积：$A = \\int_{0}^{2} (2x - x^2) \\, dx = [x^2 - \\frac{x^3}{3}]_{0}^{2} = (4 - \\frac{8}{3}) - (0 - 0) = \\frac{12 - 8}{3} = \\frac{4}{3}$'
      }
    ]
  }
];

export default chapterExercises;

// 更新章节数据中的hasExercises标记
export const updateChaptersWithExercises = (chapters: any[]) => {
  return chapters.map(chapter => {
    const hasExercises = chapterExercises.some(ce => ce.chapterId === chapter.id);
    return {
      ...chapter,
      hasExercises
    };
  });
};

// 获取特定章节的练习题
export const getChapterExercises = (chapterId: string) => {
  return chapterExercises.find(ce => ce.chapterId === chapterId)?.exercises || [];
};

// 获取用户的错题集（从localStorage获取）
export const getWrongExercises = () => {
  const wrongExercisesStr = localStorage.getItem('wrongExercises');
  if (!wrongExercisesStr) return [];
  
  try {
    return JSON.parse(wrongExercisesStr);
  } catch (e) {
    console.error('Failed to parse wrong exercises', e);
    return [];
  }
};

// 添加错题到错题集
export const addToWrongExercises = (exerciseId: string) => {
  const wrongExercises = getWrongExercises();
  if (!wrongExercises.includes(exerciseId)) {
    wrongExercises.push(exerciseId);
    localStorage.setItem('wrongExercises', JSON.stringify(wrongExercises));
  }
};

// 从错题集中移除
export const removeFromWrongExercises = (exerciseId: string) => {
  const wrongExercises = getWrongExercises();
  const updatedWrongExercises = wrongExercises.filter(id => id !== exerciseId);
  localStorage.setItem('wrongExercises', JSON.stringify(updatedWrongExercises));
};