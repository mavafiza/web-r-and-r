import React from 'react';
import {Layout} from "../components";
// import MovieCard from './MovieCard'; // Asegúrate de tener el componente MovieCard creado

const home = () => {
  const latestProduction = {
    title: 'Título de la Última Producción',
    imageUrl: 'URL_DE_LA_IMAGEN_EN_CLOUDINARY',
    trailerUrl: 'URL_DEL_TRAILER_EN_YOUTUBE',
    location: 'Plataforma de Streaming',
    releaseDate: 'Fecha de Estreno',
    synopsis: 'Breve reseña de la producción.',
  };

  return (
    <Layout>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="bg-cover bg-center h-screen flex items-center">
          {/* Puedes ajustar la imagen y estilos según tus necesidades */}
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-2">Nombre de la Empresa</h1>
            <p className="text-lg">Descripción persuasiva y elegante de la empresa.</p>
          </div>
        </div>

        {/* Latest Production Card Section */}
        <div className="container mx-auto mt-8">
          {/* <MovieCard
            title={latestProduction.title}
            imageUrl={latestProduction.imageUrl}
            trailerUrl={latestProduction.trailerUrl}
            details={{
              location: latestProduction.location,
              releaseDate: latestProduction.releaseDate,
              synopsis: latestProduction.synopsis,
            }}
          /> */}
        </div>
      </div>
    </Layout>
  );
};
export default home;