import createElement from './createElement.js';

const createFormPercon = (n) => {
  const form = createElement('form', {
    className: 'person',
  });

  const title = createElement('h2', {
    className: 'person__title',
    textContent: `Пассажир №${n + 1}`,
  });

  const fieldName = createElement('div', {
    className: 'field',
  });

  const labelName  = createElement('label', {
    className: 'field__label',
    for: `name${n}`,
    textContent: 'ФИО',
  });

  const inputName  = createElement('input', {
    className: 'field__input',
    id: `name${n}`,
    name: 'name',
    type: 'text',
    placeholder: 'Введите ваше ФИО',
    required: true,
  });

  const fieldTicket = createElement('div', {
    className: 'field',
  });

  const labelTicket  = createElement('label', {
    className: 'field__label',
    for: `ticket${n}`,
    textContent: 'Номер билета (10 цифр)',
  });

  const inputTicket  = createElement('input', {
    className: 'field__input',
    id: `ticket${n}`,
    name: 'ticket',
    type: 'text',
    placeholder: 'Номер билета',
    required: true,
    minLength: 10,
    maxLength: 10,
  });

  const button  = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  fieldName.append(labelName, inputName);
  fieldTicket.append(labelTicket, inputTicket);

  form.append(title, fieldName, fieldTicket, button);
  return form
}

/*


    <minlength="10" maxlength="10">
  </div>
*/


const getFormPerson = (count) => {
  const forms = [];

  if(count > 6) count = 6;

  for (let i = 0; i < count; i++) {
    forms.push(createFormPercon(i))
  }

  return forms;
}

export default getFormPerson;
