const Social = ({ url = '', Icon = '' }) => {
    return (
        <>
            <a href={url} target='_blank'>
                {Icon}
            </a>
        </>
    )
}

export default Social