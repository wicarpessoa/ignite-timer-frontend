import { useFormContext } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmount } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmount
        type="number"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        id="minutesAmount"
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
