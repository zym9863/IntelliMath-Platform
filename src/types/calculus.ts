/**
 * 数学公式类型
 */
export interface Formula {
  id: string;
  name: string;
  latex: string;
  description: string;
}

/**
 * 定理类型
 */
export interface Theorem {
  id: string;
  name: string;
  statement: string;
  proof?: string;
  formulas?: Formula[];
}

/**
 * 知识点类型
 */
export interface Concept {
  id: string;
  name: string;
  description: string;
  theorems?: Theorem[];
  formulas?: Formula[];
  examples?: Example[];
}

/**
 * 例题类型
 */
export interface Example {
  id: string;
  title: string;
  problem: string;
  solution: string;
  relatedConcepts?: string[]; // 相关知识点的ID
}

/**
 * 章节类型
 */
export interface Chapter {
  id: string;
  title: string;
  description: string;
  concepts: Concept[];
  order: number;
  hasExercises?: boolean; // 标记章节是否有练习题
}

/**
 * 选择题选项类型
 */
export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

/**
 * 练习题基础类型
 */
export interface ExerciseBase {
  id: string;
  title: string;
  problem: string;
  difficulty: 'easy' | 'medium' | 'hard';
  relatedConceptIds: string[];
  explanation: string; // 解题步骤和解析
}

/**
 * 选择题类型
 */
export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multipleChoice';
  options: Option[];
  correctOptionId: string;
}

/**
 * 填空题类型
 */
export interface FillInBlankExercise extends ExerciseBase {
  type: 'fillInBlank';
  blanks: string[]; // 正确答案数组，对应每个空
}

/**
 * 计算题类型
 */
export interface CalculationExercise extends ExerciseBase {
  type: 'calculation';
  answer: string; // 正确答案
  acceptableError?: number; // 可接受的误差范围（对于数值计算题）
}

/**
 * 练习题类型（联合类型）
 */
export type Exercise = MultipleChoiceExercise | FillInBlankExercise | CalculationExercise;

/**
 * 用户答题记录类型
 */
export interface ExerciseAttempt {
  exerciseId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  timestamp: number;
}

/**
 * 课程类型
 */
export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

/**
 * 章节练习题集合
 */
export interface ChapterExercises {
  chapterId: string;
  exercises: Exercise[];
}
