import { CostI } from "../../../App";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../../../utils/formatDate";

import SavingIcon from "../../../assets/img/icono_ahorro.svg";
import HomeIcon from "../../../assets/img/icono_casa.svg";
import MiscellaneousIcon from "../../../assets/img/icono_gastos.svg";
import FoodIcon from "../../../assets/img/icono_comida.svg";
import LeisureIcon from "../../../assets/img/icono_ocio.svg";
import HealthIcon from "../../../assets/img/icono_salud.svg";
import SubscriptionIcon from "../../../assets/img/icono_suscripciones.svg";
import { Dispatch, SetStateAction } from "react";

const iconsDictionary: {
  [key: string]: string;
} = {
  savings: SavingIcon,
  food: FoodIcon,
  home: HomeIcon,
  miscellaneous: MiscellaneousIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionIcon,
};

interface CostPropsI extends CostI {
  setCostEdit: Dispatch<SetStateAction<CostI | undefined>>;
  deleteCost: (id: string) => void;
}
const Cost = ({
  id,
  date,
  name,
  amount,
  category,
  setCostEdit,
  deleteCost,
}: CostPropsI) => {
  /**
   * @description Set the cost edit state of the current cost.
   */
  const handleEdit = () => {
    setCostEdit({
      id,
      name,
      amount,
      category,
      date,
    });
  };

  /**
   * @description Leading action component.
   */
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={handleEdit}>Edit</SwipeAction>
    </LeadingActions>
  );

  /**
   * @description Trailing action component.
   */
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteCost(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={iconsDictionary[category]}
              alt="category image"
              draggable={false}
            />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="gasto">{name}</p>
              <p className="fecha-gasto">
                Added the: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
export default Cost;
