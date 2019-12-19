/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(
          register,
          { data, loading, error }
        ) => {
          const onSumbit = ({
            email,
            password
          }) => {
            const input = {
              email,
              password
            };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup)
            }
            );
          };
          const errorMsg = error && 'No se puede registrar, el usuario ya existe o los datos no son correctos.';
          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              title='Registrarse'
              onSumbit={onSumbit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(
          login,
          { data, loading, error }
        ) => {
          const onSubmit = ({
            email,
            password
          }) => {
            const input = {
              email,
              password
            };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            }
            );
          };
          const errorMsg = error && 'El usuario ya existe o los datos son incorrectos';
          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              title='Iniciar Sesión'
              onSumbit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
