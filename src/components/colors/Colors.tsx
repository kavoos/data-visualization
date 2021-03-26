import React, { FC, useEffect } from 'react'

export const Colors: FC = () => {
  const csvUrl = 'https://gist.githubusercontent.com/kavoos/6d1874dc4fab9d4ede848d95174a3bea/raw/cssNamedColors.csv'

  const fetchText = async (url: string) => {
    const response = await fetch(url)
    return await response.text()
  }

  useEffect(() => {
    fetchText(csvUrl).then(text => {
      console.log(text)
    })
  })

  return null
}