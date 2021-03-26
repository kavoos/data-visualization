import React, { FC, useEffect } from 'react'

export const Colors: FC = () => {
  const url = 'https://gist.githubusercontent.com/kavoos/6d1874dc4fab9d4ede848d95174a3bea/raw/cssNamedColors.csv'

  useEffect(() => {
    fetch(url)
      .then(response => {
        response.text()
          .then(text => {
            console.log(text)
          })
      })
  })

  return null
}