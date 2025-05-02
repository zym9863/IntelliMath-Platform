# IntelliMath Platform

[中文](README.md) | [English](README_EN.md)

![IntelliMath](https://img.shields.io/badge/IntelliMath-Structured%20Calculus%20Learning%20Platform-1976d2)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)
![MUI](https://img.shields.io/badge/MUI-7.x-007fff)

IntelliMath is a structured calculus learning platform designed to help students better understand and master advanced mathematics concepts. Through clear knowledge organization and intuitive interface design, it makes complex mathematics simple and easy to understand.

## Project Features

- **Structured Knowledge System**: Content is clearly organized by chapters, concepts, theorems, formulas, etc., helping users systematically master calculus
- **Clear Mathematical Formula Presentation**: Uses LaTeX to render mathematical formulas, ensuring accurate and beautiful formula display to enhance the learning experience
- **Rich Examples and Analysis**: Each knowledge point comes with relevant examples and detailed analysis to help users deepen their understanding and application
- **Modern UI Design**: Adopts Material Design language to provide a beautiful and intuitive user interface
- **Responsive Layout**: Adapts to various device screen sizes, providing a consistent user experience

## Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Component Library**: Material-UI (MUI) 7
- **Routing Management**: React Router 7
- **Mathematical Formula Rendering**: KaTeX + react-latex-next

## Project Structure

```
src/
├── components/         # Components
│   ├── calculus/       # Math-related components
│   │   ├── ChapterList.tsx
│   │   ├── ConceptCard.tsx
│   │   ├── TheoremCard.tsx
│   │   ├── FormulaCard.tsx
│   │   └── ExampleCard.tsx
│   └── layout/         # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── data/               # Data
│   └── calculusData.ts # Calculus course data
├── pages/              # Pages
│   ├── HomePage.tsx
│   ├── ChaptersPage.tsx
│   ├── ChapterDetailPage.tsx
│   └── NotFoundPage.tsx
├── types/              # Type definitions
│   └── calculus.ts
├── App.tsx             # Application entry
├── App.css             # Global styles
└── main.tsx            # Rendering entry
```

## Functional Modules

1. **Home Page**: Displays platform introduction and course overview
2. **Chapter List**: Displays all chapters and their introductions
3. **Chapter Details**: Displays all knowledge points for a specific chapter
4. **Concept Cards**: Displays detailed content of knowledge points, including theorems, formulas, and examples

## Installation and Running

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Version

```bash
npm run preview
```

## Design Highlights

- **Gradient Title**: Uses CSS gradients to add visual appeal to titles
- **Card Hover Effects**: Cards have a slight float and enhanced shadow effect when hovered
- **Chapter Navigation**: Uses a fixed sidebar in the chapter details page for quick navigation between knowledge points
- **Mathematical Formula Styling**: Optimized the style of KaTeX-rendered mathematical formulas for improved readability
- **Responsive Design**: Optimized layout and font sizes for different screen sizes

## Future Plans

- [ ] Add user authentication system
- [ ] Implement learning progress tracking
- [ ] Add practice problems and self-test functionality
- [ ] Support dark mode
- [ ] Add search functionality

## Contribution Guidelines

Contributions of code, issue reports, or new feature suggestions are welcome. Please follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
