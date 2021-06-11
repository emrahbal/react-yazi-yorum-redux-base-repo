import axios from "axios";
import { api } from "../api";

export const yaziListesiGetir=() =>dispatch=>{
    api()
    .get("/posts")
    .then((response) => {
      dispatch({type: 'YAZI_LISTESI_GETIR', payload: response.data})
    }).catch(()=>{
        dispatch({type:'YAZI_LISTESI_GETIR_HATA', payload: 'Yazilar yüklenirken hata oluştu'})
    })}

    export const yaziGetir= (id) => dispatch=>{
      axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((responses) => {
        const payload={
          ...responses[0].data,
          ...responses[1].data
        }
        dispatch({type: 'YAZIGETIR',  payload}) // payload: payload
      
      })
      .catch((error) => {
        dispatch({type:'YAZI_GETIR_HATA', payload:'Yazi yüklenirken hata oluştu'})
      });
    }