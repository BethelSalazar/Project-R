// src/tests/Clase.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios'; // Si es necesario para simular la llamada al servicio web

import Clase from '../components/Clase';

// Mockear la llamada a axios para simular el envío de datos al servicio web
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('Pruebas para el componente Clase', () => {
  it('Verifica que los datos se envíen correctamente al servicio web desde el formulario', async () => {
    // Renderizar el componente
    render(<Clase src="ruta/a/imagen.jpg" alt="Descripción de imagen" title="Título de la clase" description="Descripción de la clase" />);

    // Simular el llenado del formulario
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Nombre de prueba' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'correo@prueba.com' } });
    fireEvent.change(screen.getByPlaceholderText('Teléfono'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByDisplayValue('tarjeta'), { target: { value: 'paypal' } });

    // Simular el envío del formulario
    fireEvent.submit(screen.getByText('Confirmar compra'));

    // Verificar que se haya llamado a axios.post con los datos correctos
    expect(axios.post).toHaveBeenCalledWith(
      'url/del/servicio/web',
      {
        nombre: 'Nombre de prueba',
        email: 'correo@prueba.com',
        telefono: '1234567890',
        metodoPago: 'paypal',
      }
    );
  });

  it('Asegura que el componente se renderiza correctamente con los datos esperados', () => {
    // Renderizar el componente con datos específicos
    render(<Clase src="ruta/a/imagen.jpg" alt="Descripción de imagen" title="Título de la clase" description="Descripción de la clase" delay={0} />);

    // Verificar que ciertos elementos se encuentran en la pantalla
    expect(screen.getByAltText('Descripción de imagen')).toBeInTheDocument();
    expect(screen.getByText('Título de la clase')).toBeInTheDocument();
    expect(screen.getByText('Descripción de la clase')).toBeInTheDocument();
  });

  it('Simula un evento de usuario (click para el envío del formulario) y verifica el comportamiento resultante', async () => {
    // Renderizar el componente
    render(<Clase src="ruta/a/imagen.jpg" alt="Descripción de imagen" title="Título de la clase" description="Descripción de la clase" />);

    // Simular el click en el botón de comprar
    fireEvent.click(screen.getByText('Comprar'));

    // Verificar que el formulario de compra se muestra después del click
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Teléfono')).toBeInTheDocument();
    expect(screen.getByDisplayValue('tarjeta')).toBeInTheDocument();
  });
});
