import Card from 'react-bootstrap/Card';


const PostCard = ({postObj}) => {
    const {title, content, category, _id} = postObj;
  return (
   <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{content}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {title}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
   </div>
  )
}

export default PostCard