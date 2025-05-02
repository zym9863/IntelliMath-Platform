import { Course, Chapter, Concept } from '../types/calculus';

// 极限与连续性章节
const limitConcepts: Concept[] = [
  {
    id: 'limit-definition',
    name: '极限的定义',
    description: '函数极限是描述函数在自变量趋近于某一值或无穷大时，函数值的行为的概念。',
    theorems: [
      {
        id: 'limit-epsilon-delta',
        name: 'ε-δ定义',
        statement: '对于函数f(x)在点x₀的极限L，如果对于任意给定的ε>0，存在δ>0，使得当0<|x-x₀|<δ时，有|f(x)-L|<ε，则称L为函数f(x)当x→x₀时的极限，记作lim(x→x₀)f(x)=L。',
      }
    ],
    formulas: [
      {
        id: 'limit-notation',
        name: '极限符号',
        latex: '\\lim_{x \\to x_0} f(x) = L',
        description: '表示当x趋近于x₀时，函数f(x)的极限值为L。'
      }
    ],
    examples: [
      {
        id: 'limit-example-1',
        title: '求极限',
        problem: '求极限：$\\lim_{x \\to 0} \\frac{\\sin x}{x}$',
        solution: '这是一个重要的基本极限，结果为1。可以通过几何方法或使用洛必达法则证明。',
        relatedConcepts: ['limit-definition']
      }
    ]
  },
  {
    id: 'continuity',
    name: '函数的连续性',
    description: '函数在一点连续是指函数在该点的极限存在且等于函数值。',
    theorems: [
      {
        id: 'continuity-definition',
        name: '连续性定义',
        statement: '函数f(x)在点x₀连续，当且仅当lim(x→x₀)f(x)=f(x₀)。',
      },
      {
        id: 'intermediate-value-theorem',
        name: '介值定理',
        statement: '如果函数f(x)在闭区间[a,b]上连续，且f(a)≠f(b)，那么对于f(a)与f(b)之间的任意值y₀，至少存在一点c∈(a,b)，使得f(c)=y₀。',
      }
    ],
    examples: [
      {
        id: 'continuity-example-1',
        title: '判断函数连续性',
        problem: '判断函数f(x)在x=1处是否连续，其中f(x)在x≠1时等于(x²-1)/(x-1)，在x=1时等于2。',
        solution: '计算极限：lim(x→1)(x²-1)/(x-1) = lim(x→1)(x-1)(x+1)/(x-1) = lim(x→1)(x+1) = 2。由于极限值等于函数在x=1处的值f(1)=2，所以函数在x=1处连续。',
        relatedConcepts: ['continuity']
      }
    ]
  }
];

// 导数与微分章节
const derivativeConcepts: Concept[] = [
  {
    id: 'derivative-definition',
    name: '导数的定义',
    description: '导数表示函数在某一点的瞬时变化率，是函数图像在该点的切线斜率。',
    theorems: [
      {
        id: 'derivative-limit-definition',
        name: '导数的极限定义',
        statement: '函数f(x)在点x₀处的导数定义为：f\'(x₀) = lim(h→0)[f(x₀+h)-f(x₀)]/h，如果此极限存在。',
      }
    ],
    formulas: [
      {
        id: 'derivative-notation',
        name: '导数符号',
        latex: 'f\'(x) = \\frac{df}{dx} = \\frac{d}{dx}f(x)',
        description: '表示函数f(x)关于x的导数。'
      }
    ],
    examples: [
      {
        id: 'derivative-example-1',
        title: '求导数',
        problem: '求函数$f(x) = x^2$在任意点处的导数。',
        solution: '使用导数定义：$f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$',
        relatedConcepts: ['derivative-definition']
      }
    ]
  },
  {
    id: 'differentiation-rules',
    name: '求导法则',
    description: '求导法则是一系列用于计算各种函数导数的规则。',
    theorems: [
      {
        id: 'sum-rule',
        name: '和差法则',
        statement: '如果函数u(x)和v(x)都可导，则它们的和差也可导，且[u(x)±v(x)]\'=u\'(x)±v\'(x)。',
      },
      {
        id: 'product-rule',
        name: '乘积法则',
        statement: '如果函数u(x)和v(x)都可导，则它们的乘积也可导，且[u(x)·v(x)]\'=u\'(x)·v(x)+u(x)·v\'(x)。',
      },
      {
        id: 'quotient-rule',
        name: '商法则',
        statement: '如果函数u(x)和v(x)都可导，且v(x)≠0，则它们的商也可导，且[u(x)/v(x)]\'=[u\'(x)·v(x)-u(x)·v\'(x)]/[v(x)]²。',
      },
      {
        id: 'chain-rule',
        name: '链式法则',
        statement: '如果y=f(u)，u=g(x)，且f和g都可导，则复合函数y=f(g(x))也可导，且dy/dx=(dy/du)·(du/dx)。',
      }
    ],
    formulas: [
      {
        id: 'power-rule',
        name: '幂函数求导公式',
        latex: '\\frac{d}{dx}(x^n) = nx^{n-1}',
        description: '幂函数的导数。'
      },
      {
        id: 'exp-rule',
        name: '指数函数求导公式',
        latex: '\\frac{d}{dx}(e^x) = e^x',
        description: '自然指数函数的导数。'
      },
      {
        id: 'ln-rule',
        name: '对数函数求导公式',
        latex: '\\frac{d}{dx}(\\ln x) = \\frac{1}{x}',
        description: '自然对数函数的导数。'
      },
      {
        id: 'sin-rule',
        name: '正弦函数求导公式',
        latex: '\\frac{d}{dx}(\\sin x) = \\cos x',
        description: '正弦函数的导数。'
      },
      {
        id: 'cos-rule',
        name: '余弦函数求导公式',
        latex: '\\frac{d}{dx}(\\cos x) = -\\sin x',
        description: '余弦函数的导数。'
      }
    ],
    examples: [
      {
        id: 'differentiation-example-1',
        title: '使用链式法则',
        problem: '求函数$f(x) = \\sin(x^2)$的导数。',
        solution: '使用链式法则：$f\'(x) = \\cos(x^2) \\cdot \\frac{d}{dx}(x^2) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$',
        relatedConcepts: ['differentiation-rules']
      }
    ]
  }
];

// 积分与微积分基本定理章节
const integralConcepts: Concept[] = [
  {
    id: 'indefinite-integral',
    name: '不定积分',
    description: '不定积分是导数的逆运算，表示一族函数，它们的导数都等于被积函数。',
    formulas: [
      {
        id: 'indefinite-integral-notation',
        name: '不定积分符号',
        latex: '\\int f(x) dx = F(x) + C',
        description: '其中F\'(x) = f(x)，C为任意常数。'
      },
      {
        id: 'power-integral',
        name: '幂函数积分公式',
        latex: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1',
        description: '幂函数的不定积分。'
      },
      {
        id: 'exp-integral',
        name: '指数函数积分公式',
        latex: '\\int e^x dx = e^x + C',
        description: '自然指数函数的不定积分。'
      },
      {
        id: 'sin-integral',
        name: '正弦函数积分公式',
        latex: '\\int \\sin x dx = -\\cos x + C',
        description: '正弦函数的不定积分。'
      },
      {
        id: 'cos-integral',
        name: '余弦函数积分公式',
        latex: '\\int \\cos x dx = \\sin x + C',
        description: '余弦函数的不定积分。'
      }
    ],
    examples: [
      {
        id: 'indefinite-integral-example-1',
        title: '计算不定积分',
        problem: '计算不定积分：$\\int (2x + e^x) dx$',
        solution: '$\\int (2x + e^x) dx = \\int 2x dx + \\int e^x dx = 2 \\cdot \\frac{x^2}{2} + e^x + C = x^2 + e^x + C$',
        relatedConcepts: ['indefinite-integral']
      }
    ]
  },
  {
    id: 'definite-integral',
    name: '定积分',
    description: '定积分表示函数在给定区间上的累积效应，几何上可解释为函数图像与x轴之间的有向面积。',
    theorems: [
      {
        id: 'ftc',
        name: '微积分基本定理',
        statement: '如果函数f在闭区间[a,b]上连续，F是f的一个原函数，则$\\int_a^b f(x) dx = F(b) - F(a)$。',
      }
    ],
    formulas: [
      {
        id: 'definite-integral-notation',
        name: '定积分符号',
        latex: '\\int_a^b f(x) dx',
        description: '表示函数f(x)在区间[a,b]上的定积分。'
      }
    ],
    examples: [
      {
        id: 'definite-integral-example-1',
        title: '计算定积分',
        problem: '计算定积分：$\\int_0^1 x^2 dx$',
        solution: '使用微积分基本定理：$\\int_0^1 x^2 dx = [\\frac{x^3}{3}]_0^1 = \\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3}$',
        relatedConcepts: ['definite-integral']
      }
    ]
  }
];

// 创建章节
const chapters: Chapter[] = [
  {
    id: 'limits-continuity',
    title: '极限与连续性',
    description: '本章介绍极限的概念和性质，以及函数连续性的定义和应用。',
    concepts: limitConcepts,
    order: 1
  },
  {
    id: 'derivatives',
    title: '导数与微分',
    description: '本章介绍导数的概念、几何意义和计算方法，以及微分的应用。',
    concepts: derivativeConcepts,
    order: 2
  },
  {
    id: 'integrals',
    title: '积分与微积分基本定理',
    description: '本章介绍不定积分和定积分的概念、性质和计算方法，以及微积分基本定理。',
    concepts: integralConcepts,
    order: 3
  }
];

// 创建课程
export const calculusCourse: Course = {
  id: 'calculus-101',
  title: '高等数学基础',
  description: '本课程涵盖高等数学的基本概念和方法，包括极限、连续性、导数、积分等内容。',
  chapters: chapters
};

export default calculusCourse;
