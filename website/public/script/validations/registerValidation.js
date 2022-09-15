const validations = [
    {
      inputName: "firstName",
      validations: [
        {
          validator: isEmpty,
          errorMsg: "Titulo no puede ser vacío",
        },
      ],
    },
    {
        inputName: "lastName",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "email",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "dni",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "address",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "birthdate",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "password",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
      {
        inputName: "profile_image",
        validations: [
          {
            validator: isEmpty,
            errorMsg: "Titulo no puede ser vacío",
          },
        ],
      },
  ];

    const formulario = document.querySelector(".form")

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = formulario.querySelector("inputs")

        let errors = [];

        inputs.forEach((input) => {
            if (input.value == ""){
                errors.push(input.value);
                input.classList.add('is-invalid');  
            }
        })
        
        if (Object.values(errors).length == 0) formulario.submit();
    });
})
