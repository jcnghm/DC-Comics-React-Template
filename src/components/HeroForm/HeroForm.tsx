import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseAlias, choosePowers, chooseComics, chooseBase } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}

interface HeroState {
    name: string;
    alias: string;
    powers: string;
    comics_appeared_in: string;
    base_of_operations: string;
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>(state => state.name)
    const alias = useSelector<HeroState>(state => state.alias)
    const powers = useSelector<HeroState>(state => state.powers)
    const comics_appeared_in = useSelector<HeroState>(state => state.comics_appeared_in)
    const base_of_operations = useSelector<HeroState>(state => state.base_of_operations)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseAlias(data.alias))
            dispatch(choosePowers(data.powers))
            dispatch(chooseComics(data.comics_appeared_in))
            dispatch(chooseBase(data.base_of_operations))

            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="alias">Alias</label>
                    <Input {...register('alias')} name="alias" placeholder="Alias"/>
                </div>
                <div>
                    <label htmlFor="powers">Powers</label>
                    <Input {...register('powers')} name="powers" placeholder="Powers"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="base_of_operations">Base of Operations</label>
                    <Input {...register('base_of_operations')} name="base_of_operations" placeholder="Base of Operations"/>
                </div>
                <Button type='submit' color='primary' variant='contained'>Submit</Button>
            </form>
        </div>
    )
}