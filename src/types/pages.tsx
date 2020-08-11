import { DrinkVolume, OtherDrink } from 'types/drinks'

export interface QuestionProps {
  answer: number
  setAnswer: (answer: number) => void
}

export interface DrinkProps {
  drinks: {[key: string]: DrinkVolume}
  otherDrinks?: OtherDrink[]
  setDrink?: (payload: any) => void
  setOtherDrink?: (payload: any) => void
}