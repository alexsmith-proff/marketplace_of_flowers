import { FilterDataType } from "src/enums/filter.enums"

export interface IFilterData {
  type: FilterDataType
  nameFilter: string
  values: string[]
}

export interface IFilterOderData {
  order: string
  filters: IFilterData[]
}  