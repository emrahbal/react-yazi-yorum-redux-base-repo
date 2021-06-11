const INITIAL_STATE = {
  yaziListesi: [],
  yaziListesiHata: "",
  yaziDetayi:{id:"", title:"", content:"", created_at:"",yorumlar:[]},
  yaziDetayiHata:"",
};

export const reducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "YAZI_LISTESI_GETIR":
      return { ...state, yaziListesi: action.payload };
    case "YAZI_LISTESI_GETIR_HATA":
      return { ...state, yaziListesiHata: action.payload };
    case "YAZI_GETIR":
      return { ...state, yaziDetayi: action.payload };
      case "YAZI_GETIR_HATA":
        return{...state, yaziDetayiHata: action.payload}
    default:
      return state;
  }
};
