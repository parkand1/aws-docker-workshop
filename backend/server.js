const ronin 		= require( 'ronin-server' )
const mocks 		= require( 'ronin-mocks' )
const database	= require( 'ronin-database' )

async function main() {

	try {
		const dbConnectionString = process.env.DB_CONN_STR || 'localhost:27017/crud-datastore'
		console.log( `dbConnectionString: ${dbConnectionString}` )
		
		await database.connect( process.env.DB_CONN_STR )

    const server = ronin.server({
			port: process.env.PORT || 8080
		})

		server.use( '/services/', mocks.server( server.Router() ) )

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
