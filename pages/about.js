import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import MovieDetails from '../components/MovieDetails'
import PageHeader from '../components/PageHeader'

export async function getStaticProps() {
  const res = await fetch('https://tough-erin-sheath-dress.cyclic.app/api/movies/573a139af29313caabcf0859');
  const data = await res.json();

  return { props: { movie: data } };
}

export default function About(props) {
  return (
   <>
     <PageHeader text="About the Developer: Duc Phong Ma"/>
     <Card>
        <Card.Body>
        I'm Duc Phong Ma. I have a passion about web development. I'm really excited building a whole website. 
        I hope I can find a job related to web developing especially frontend first and then learn more about backend 
        so that I am able to acquire more knowledge and learn how to build a whole website. And I will do my best to learn it and 
        hope that I can be a fullstack developer in the future. < br />< br />    

        I am currently attending Seneca College and am in my third year of the Advanced Diploma of Computer Programming and Analysis. 
        During my time as a student in Seneca College, I have gained experience in building server and client-site applications by using HTML5, CSS3, JavaScript, Node.js, Express.js as well as Microsoft SQL Server, Oracle 12c, and MongoDB. In addition, I have gained a strong understanding of Objected-Oriented Programming in C++, 
        RESTful API and using GIT for Source Control Management.< br />< br />

        It is difficult to choose but <Link href="/movies/Dark City" passHref><a>"Dark City"</a></Link> (released in 1998) is one that I always enjoy watching.
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
   </>
  )
}
