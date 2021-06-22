import Head from 'next/head'

// add meta data props into Meta tag
const Meta = ({title, keywords, description}) => {
    return (
        // Head tag is default head in next
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            
            <title>{title}</title>
        </Head>
    )
}

// set default meta props
Meta.defaultProps = {
    title: 'eco site',
    keywords: 'eco',
    description: 'eco site',
}

export default Meta