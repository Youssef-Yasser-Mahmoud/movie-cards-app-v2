# Movie Explorer

A responsive React application that displays popular movies from The Movie Database (TMDB) API.

## 📸 Preview

![screenshot](public/Movie%20Explorer.png)  

## Features

### 🎬 Movie Listings
- Fetches popular movies from TMDB API
- Displays movies in a responsive grid layout
- Shows movie posters, titles, overviews, ratings, and vote counts

### 🎨 Responsive Design
- Responsive grid layout adapts to different screen sizes
- Optimized for desktop, tablet, and mobile devices
- Media queries ensure proper display on all devices

### 💅 Stylish UI Components
- Dark theme with elegant card design
- Hover effects with smooth animations
- Cursor pointer on movie cards for better UX
- Consistent color scheme throughout the application

### ⚡ Performance Optimizations
- Custom `useFetch` hook for data fetching
- `useCallback` for memoizing event handlers
- `useMemo` for optimizing calculations (formatted ratings)
- Prevents unnecessary re-renders

### 🔄 Loading State
- Animated spinner during data loading
- Smooth transition between loading and content states
- Visual feedback for users during API requests

## Technical Implementation

### Component Structure
- **App**: Main application component
- **MoviesList**: Manages the movie grid and data fetching
- **MovieItem**: Individual movie card component
- **Spinner**: Loading indicator component

### Custom Hooks
- **useFetch**: Custom hook for API data fetching with loading state management

### Styling
- CSS modules for component-specific styling
- Responsive design with media queries
- Animation effects for enhanced user experience

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm 

### Installation

1. Clone the repository
```bash
git clone https://github.com/Youssef-Yasser-Mahmoud/movie-cards-app-v2.git
```
2. Navigate to the project directory
```bash
cd movie-explorer
```
3. Install dependencies
```bash
npm install
```
4. Start the development server
```bash
npm run dev
```
## Technologies Used
- React : UI library
- Vite : Build tool and development server
- CSS : Styling
- TMDB API : Movie data source
- ESLint : Code linting

## API Reference
This project uses The Movie Database (TMDB) API to fetch movie data.

- Base URL: https://api.themoviedb.org/3
- Endpoint: /discover/movie?sort_by=popularity.desc
- Image Base URL: https://image.tmdb.org/t/p/w500/
