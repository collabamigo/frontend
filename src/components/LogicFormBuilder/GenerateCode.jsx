export default (formData, isV7) => {
    return (`
  () => {
    
    return (
      <form>
  ${
    Array.isArray(formData)
      ? formData.reduce(
          (
            previous,
            {
              type,
              name,
              options,
            }
          ) => {
  
            if (type === "select") {
              const select = `     <label className="fw-bold mt-3 mb-2">${name} </label> <br/> <select ${
                isV7 ? "" : `name="${name}"`
              }><br/>${options
                .split(";")
                .filter(Boolean)
                .reduce((temp, option) => {
                  return (
                    temp +
                    `        <option value="${option}">${option}</option><br/>`
                  )
                }, "")}      </select><br/>`
  
              return previous + select
            }
  
            if (type === "radio" || type === "checkbox") {
              const select = `<label className="fw-bold mt-3 mb-2">${name}</label><br/>${options
                .split(";")
                .filter(Boolean)
                .reduce((temp, option) => {
                  return (
                    temp +
                    `<input ${
                      isV7 ? "" : `name="${name}"`
                    } type="${type}" value="${option}" /> <label for="${option}">${option}</label><br/>`
                  )
                }, "")}`
  
              return previous + select
            }
            
  
            if (type === "textarea") {
              const select = `      <label className="fw-bold mt-3"> ${name}</label><br/><textarea /><br/>`
              return previous + select
            }
  
            return (
              previous +
              `     <label className="fw-bold mt-3"> ${name}<br/><input className="mt-2 mb-2" type="${type}" /></label><br/><br/>`
            )
          },
          ""
        )
      : ""
  }
      </form>
    );
  }`)
  }
