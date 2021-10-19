import { Referencia } from '../../elemento';
import { ElementoAction } from './acoes';

export const RENUMERAR_ELEMENTO = 'RENUMERAR_ELEMENTO';

export class RenumerarElemento implements ElementoAction {
  descricao: string;
  tipo?: string;

  constructor() {
    this.descricao = 'Numerar e criar rótulo para o dispositivo ';
  }

  execute(atual: Referencia, numero: string): any {
    this.tipo = atual.tipo;
    return {
      type: RENUMERAR_ELEMENTO,
      atual,
      novo: {
        numero,
      },
    };
  }
}
export const renumerarElementoAction = new RenumerarElemento();
