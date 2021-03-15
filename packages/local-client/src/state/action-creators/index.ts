import { ActionType } from '../action-types';
import { Action, DeleteCellAction, InsertCellAction, MoveCellAction, UpdateCellAction, Direction } from '../actions';
import { CellTypes } from '../cell';

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id
  };
};

export const insertCell = (id: string, type: CellTypes): InsertCellAction => {
  return {
    type: ActionType.INSERT_CELL,
    payload: {
      id,
      type
    }
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction
    }
  };
};

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content
    }
  };
};