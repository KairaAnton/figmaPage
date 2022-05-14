import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from './reduxToolkit'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector