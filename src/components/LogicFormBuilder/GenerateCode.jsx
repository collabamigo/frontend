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
              const select = `      <select ${
                isV7 ? "" : `name="${name}"`
              }>\n${options
                .split(";")
                .filter(Boolean)
                .reduce((temp, option) => {
                  return (
                    temp +
                    `        <option value="${option}">${option}</option>\n`
                  )
                }, "")}      </select>\n`
  
              return previous + select
            }
  
            if (type === "radio") {
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
              const select = `      <textarea />\n`
              return previous + select
            }
  
            return (
              previous +
              `     <label className="fw-bold mt-3"> ${name}<br/><input className="mt-2 mb-4" type="${type}" /></label>\n`
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
