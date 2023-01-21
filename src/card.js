function Card(props){

return<div className="hello">

<h3>{props.label}</h3>    
<li>{props.id}</li>
<img  width={200} height={200} src={props.img} />
<p>{props.description}</p>
<h5>{props.price}</h5>
<h3>{props.cat}</h3>
<table className="border">
    
    <th>
        <td>Rate</td>
        <td>Count</td>
    </th>
    <tr>
        <td>{props.rate}</td>
        <td>{props.count}</td>
    </tr>
</table>

</div>
}
export default Card;