import { useForm } from 'react-hook-form';

import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Button from '../Button';
import StyledForm from './StyledForm';

import { Event } from '../../store/ScheduleContextType';
import { useSchedule } from '../../store/ScheduleContext';
import { useEffect } from 'react';

function Form() {
  const { register, handleSubmit, reset, setValue } = useForm<Event>();
  const { addEvent, editedEvent } = useSchedule();

  useEffect(() => {
    setValue({title: });
  }, [editedEvent, setValue]);

  function onSubmit(data: Event): void {
    console.log(data);
    addEvent({ ...data, id: Math.random().toString() });
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Title"
        {...register('title', { required: true })}
      />
      <Textarea
        placeholder="Description"
        {...register('description', { required: true })}
      />
      <Input type="date" {...register('date', { required: true })} />
      <Select
        options={['Casual', 'Important', 'Crucial']}
        {...register('status')}
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </StyledForm>
  );
}

export default Form;
