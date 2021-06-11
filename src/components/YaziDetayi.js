import React, { useEffect } from "react";

import YaziYorumlari from "./YaziYorumlari";
import { Link, useParams, useHistory } from "react-router-dom";
import SilModal from "./SilModal";
import { yaziGetir } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const YaziDetayi = () => {
  const yaziDetayi = useSelector((state) => state.yaziDetayi);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  console.log({ id });

  const handleCommentSubmit = (event, yorum) => {
    // event.preventDefault();
    // api()
    //   .post(`/posts/${id}/comments`, yorum)
    //   .then((response) => {
    //     setYorumlar([...yorumlar, response.data]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    dispatch(yaziGetir(id));
    // axios
    //   .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    //   .then((responses) => {
    //     setYaziDetayi(responses[0].data);
    //     setYorumlar(responses[1].data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{yaziDetayi.title}</h2>
      <p>{yaziDetayi.created_at}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${yaziDetayi.id}/edit`}>
          Düzenle
        </Link>
        <SilModal yazi={yaziDetayi} push={history.push} />
      </div>
      <p>{yaziDetayi.content}</p>
      <YaziYorumlari
        yorumlar={yaziDetayi.yorumlar}
        handleSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
};

export default YaziDetayi;
