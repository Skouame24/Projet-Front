import { useState, useEffect } from "react";
import { FormItem } from "./FormItem";

export const MultiStepForm = (props) => {
  // stocke le numéro d'index avec les réponses 
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    // vérifier si les réponses ne sont pas vides
    if (Object.keys(answers).length > 1) {
      // mettrer a jour la page
      props.onPageUpdate(answers.index, answers);
      // mettre à jour le numéro de page 
      setAnswers({ index: props.step })
    } else {
      setAnswers({ index: props.step })
    }
    console.log(answers);
  }, [props.step])

  const updateAnswers = (value, category) => {
    setAnswers({...answers, [category]: value});
  }

  return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItem key={`${index}_${item.label}`} item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null} />
          )
        })
      }
    </div>
  )
}
