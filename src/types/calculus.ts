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
