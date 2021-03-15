import { ActionType } from '../action-types';
import { CellTypes } from '../cell';

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: 'up' | 'down';
  }
}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

interface InsertCellAction {
  type: ActionType.INSERT_CELL;
  payload: {
    id: string;
    type: CellTypes;
  }
}

interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  }
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAction
  | UpdateCellAction;