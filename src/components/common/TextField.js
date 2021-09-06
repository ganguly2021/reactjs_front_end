import React from 'react'

function TextField(props) {

  const {
    type,
    id,
    name,
    className,
    value,
    onChange,
    error,
    lblText,
    placeholder,
    infoText
  } = props

  return (
    <div className="mb-3">
      {lblText && ( <label htmlFor={id} className="form-label">{lblText}</label> ) }
      
      <input 
        type={type}
        className={error ? `${className} is-invalid` : className}
        id={id}
        name={name} 
        aria-describedby={ infoText ? ( id + "Help" ) : '' } 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      
      { infoText && ( <div id={id + "Help"} className="form-text">
          <i className="fas fa-info-circle"></i>{infoText}
        </div> 
      )}

      {error && (
        <div className="invalid-feedback">
          <i className="fas fa-exclamation-circle"></i>{error}
        </div>
      )}
    </div>
  )
}

export default TextField
