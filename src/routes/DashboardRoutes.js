import { Routes, Route, Navigate } from 'react-router-dom';
import { MoviesGrid } from '../components/MoviesGrid';
import { MovieDetails } from '../pages/MovieDetails';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <Routes>
                    <Route path="*" element={<MoviesGrid />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}