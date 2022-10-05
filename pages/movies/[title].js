import {useRouter} from 'next/router'
import useSWR from 'swr'
import Error from 'next/error'
import MovieDetails from '../../components/MovieDetails'
import PageHeader from '../../components/PageHeader'

export default function MovieTitle() {
    const router = useRouter();
    const { title } = router.query;

    const { data, error } = useSWR(`https://tough-erin-sheath-dress.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

    if(data == null){
      return null
    }
    else{
      if(data.length <= 0){
        return (<><Error statusCode={404} /></>)
      }
      else{
        return(
        <>
          {data.map(item => (
            <div key={item._id}>
              <PageHeader text={item.title} />
              <MovieDetails movie={item} />
            </div>
          ))}
        </>
        )
      }
    }
    
   
    
  }