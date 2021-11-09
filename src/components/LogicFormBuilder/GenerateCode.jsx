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
              required,
              max,
              min,
              maxLength,
              minLength,
              pattern,
              options,
            }
          ) => {
            const anyAttribute = [
              required,
              max,
              min,
              maxLength,
              minLength,
              pattern,
            ].some((value) => {
              const isBooleanValue = typeof value === "boolean"
  
              if (isBooleanValue) {
                return value !== undefined
              }
  
              return Boolean(value)
            })
            const ref = isV7
              ? `{...register${
                  required ? `("${name}", { required: true })` : ""
                }}`
              : ` ref={register${required ? "({ required: true })" : ""}}`
  
            if (type === "select") {
              const select = `      <select ${
                isV7 ? "" : `name="${name}"`
              }${ref}>\n${options
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
              const select = `\n${options
                .split(";")
                .filter(Boolean)
                .reduce((temp, option) => {
                  return (
                    temp +
                    `<input ${
                      isV7 ? "" : `name="${name}"`
                    }${ref} type="${type}" value="${option}" />\n`
                  )
                }, "")}`
  
              return previous + select
            }
  
            let attributes = ""
  
            if (anyAttribute) {
              attributes += isV7 ? `("${name}", {` : "({"
  
              if (required) {
                attributes += "required: true"
              }
              if (max) {
                attributes += `${attributes === "({" ? "" : ", "}max: ${max}`
              }
              if (min) {
                attributes += `${attributes === "({" ? "" : ", "}min: ${min}`
              }
              if (minLength) {
                attributes += `${
                  attributes === "({" ? "" : ", "
                }minLength: ${minLength}`
              }
              if (maxLength) {
                attributes += `${
                  attributes === "({" ? "" : ", "
                }maxLength: ${maxLength}`
              }
              if (pattern) {
                attributes += `${
                  attributes === "({" ? "" : ", "
                }pattern: /${pattern}/i`
              }
  
              attributes += "})"
            }
  
            const register = isV7
              ? `{...register${attributes}}`
              : `name="${name}"`
  
            if (type === "textarea") {
              const select = `      <textarea ${register} />\n`
              return previous + select
            }
  
            return (
              previous +
              `     <label className="fw-bold"> ${name}<br/><input className="mt-2 mb-4" type="${type}" ${register} /></label>\n`
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
