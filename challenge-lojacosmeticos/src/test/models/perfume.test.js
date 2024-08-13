import {
    describe, expect, it, jest,
  } from '@jest/globals';
  import Perfume from '../../models/Perfume.js';
  
  describe('Testando o modelo Perfume', () => {
    const objectPerfume = {
      nome: 'CDC',
      cidade: 'Sao Paulo',
      email: 'c@c.com',
    };
  
    it('Deve instanciar um novo perfume', () => {
      const perfume = new Perfume(objectPerfume);
  
      expect(perfume).toEqual(
        expect.objectContaining(objectPerfume),
      );
    });
  
    it.skip('Deve salvar perfume no BD', () => {
      const perfume = new Perfume(objectPerfume);
  
      perfume.salvar().then((dados) => {
        expect(dados.titulo).toBe('CDC');
      });
    });
  
    it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
      const perfume = new Perfume(objectPerfume);
  
      const dados = await perfume.salvar();
  
      const retornado = await Perfume.pegarPeloId(dados.id);
  
      expect(retornado).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          ...objectPerfume,
          created_at: expect.any(String),
          updated_at: expect.any(String),
        }),
      );
    });
  
    it('Deve fazer uma chamada simulada ao BD', () => {
      const perfume = new Perfume(objectPerfume);
  
      editora.salvar = jest.fn().mockReturnValue({
        id: 10,
        nome: 'CDC',
        cidade: 'Sao Paulo',
        email: 'c@c.com',
        created_at: '2022-10-01',
        updated_at: '2022-10-01',
      });
  
      const retorno = perfume.salvar();
  
      expect(retorno).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          ...objetoEditora,
          created_at: expect.any(String),
          updated_at: expect.any(String),
        }),
      );
    });
  });
  