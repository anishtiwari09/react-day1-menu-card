export default function ItemPrice({price,originalPrice})
{
    return (
        <p>
            {price} <span>&nbsp;&nbsp;{originalPrice}</span>
        </p>
    )
}