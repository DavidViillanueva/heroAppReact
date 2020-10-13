import { heroes } from "../data/Heroes";


export const getHeroeByPublisher = ( publisher ) => {

    const validPublishers = [ 'Marvel Comics', 'DC Comics'];

    if ( !validPublishers.includes( publisher) ){
        throw new Error(`Publisher "${ publisher }" was no valid.`)
    }

    return heroes.filter( hero => hero.publisher === publisher );

}