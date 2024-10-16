import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const ObraMenu = ({ data }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.3 })
	const navigate = useNavigate()
	const { currentUser } = useAuthContext()

	useEffect(() => {
		if (data?.length) {
			const imgLoader = function (obra) {
				var link = document.createElement('link')
				link.rel = 'preload'
				link.as = 'image'
				link.href = obra.imagenURL

				document.head.appendChild(link)
			}
			data?.forEach((obra) => {
				imgLoader(obra)
			})
		}

		return () => {
			const links = document.querySelector('link[rel="preload"]')
			if (links && links.length > 0) {
				links.forEach((el) => el.remove())
			}
		}
	}, [data])

	const serie0 = data[0]?.serie === 'torsión' ? 'torsion' : data[0]?.serie
	const serie1 = data[1]?.serie === 'torsión' ? 'torsion' : data[1]?.serie
	const serie2 = data[2]?.serie === 'torsión' ? 'torsion' : data[2]?.serie
	const serie3 = data[3]?.serie === 'torsión' ? 'torsion' : data[3]?.serie
	const serie4 = data[4]?.serie === 'torsión' ? 'torsion' : data[4]?.serie

	return (
		<div className='max-w-[1344px] min-[1600px]:mx-auto mx-[1rem] lg:mx-[8rem] text-xs lg:text-sm xl:text-base pb-16'>
			<h1 className='uppercase text-base opacity-[0.7] lg:text-xl '>obra</h1>
			<div ref={ref} className='square-responsive mt-[1rem]'>
				<div
					className='div-text lg:text-base'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<p>
						Aquí podréis ver mi obra actual centrada en la serie “Bloques”, la serie
						"Wood" y la serie "Torsión", que son estéticamente distintas pero tienen
						un nexo común: la luz y sus sombras.
					</p>
					<p>
						Otras series más experimentales como “Wire” o “Iluminados”, de técnicas y
						estilos completamente diferentes.
					</p>
				</div>

				<div
					className='div1 overflow-hidden relative cursor-pointer'
					style={{
						transform: isInView ? 'unset' : 'translateX(-60px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						src={data[0]?.imagenURL}
						onClick={() => navigate(`/obra/${serie0}`)}
					/>
					{currentUser && (
						<div className='absolute top-[0.3rem] right-[0.3rem] z-1 text-white'>
							<Link className='z-10' to={`/obra/${data[0]?.id}/edit `}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>
				<div
					className='div1-label relative'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<div className='h-full border-t border-neutral-400 '></div>
					<Link to={`/obra/${serie0}`} className='absolute top-0 right-0 capitalize'>
						{data[0]?.serie}
					</Link>
				</div>
				<div
					className='div2 overflow-hidden relative cursor-pointer'
					style={{
						transform: isInView ? 'unset' : 'translateY(-60px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						src={data[1]?.imagenURL}
						onClick={() => navigate(`/obra/${serie1}`)}
					/>
					{currentUser && (
						<div className='absolute top-[0.5rem] right-[0.5rem] z-1 text-white'>
							<Link className='z-10' to={`/obra/${data[1]?.id}/edit `}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>
				<div
					className='div2-label relative'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<div className='h-full border-b border-neutral-400'></div>
					<Link
						to={`/obra/${serie1}`}
						className='absolute bottom-0 right-0 capitalize'>
						{data[1]?.serie}
					</Link>
				</div>
				<div
					className='div3 overflow-hidden relative cursor-pointer'
					style={{
						transform: isInView ? 'unset' : 'translateY(60px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						src={data[2]?.imagenURL}
						onClick={() => navigate(`/obra/${serie2}`)}
					/>
					{currentUser && (
						<div className='absolute top-[0.5rem] right-[0.5rem] z-1 text-white'>
							<Link className='z-10' to={`/obra/${data[2]?.id}/edit `}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>
				<div
					className='div3-label relative'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<div className='h-full border-t border-neutral-400'></div>
					<Link to={`/obra/${serie2}`} className='absolute top-0 left-0  capitalize'>
						{data[2]?.serie}
					</Link>
				</div>
				<div
					className='div4 overflow-hidden relative cursor-pointer'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						src={data[3]?.imagenURL}
						onClick={() => navigate(`/obra/${serie3}`)}
					/>
					{currentUser && (
						<div className='absolute top-[0.5rem] right-[0.5rem] z-1 text-white'>
							<Link className='z-10' to={`/obra/${data[3]?.id}/edit `}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>
				<div
					className='div4-label relative'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<div className='h-full border-b border-neutral-400'></div>
					<Link
						to={`/obra/${serie3}`}
						className='absolute bottom-0 left-0  capitalize'>
						{data[3]?.serie}
					</Link>
				</div>
				<div
					className='div5a overflow-hidden relative cursor-pointer'
					style={{
						transform: isInView ? 'unset' : 'translateY(60px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						className='object-left'
						src={data[4]?.imagenURL}
						onClick={() => navigate(`/obra/${serie4}`)}
					/>
				</div>
				<div
					className='div5b overflow-hidden relative cursor-pointer'
					style={{
						transform: isInView ? 'unset' : 'translateX(60px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}>
					<img
						className='object-right'
						src={data[4]?.imagenURL}
						onClick={() => navigate(`/obra/${serie4}`)}
					/>
					{currentUser && (
						<div className='absolute top-[0.5rem] right-[0.5rem] z-1 text-white'>
							<Link className='z-10' to={`/obra/${data[4]?.id}/edit `}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>
				<div
					className='div5-label relative'
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s',
					}}>
					<div className='h-full border-t border-neutral-400'></div>
					<Link
						to={`/obra/${serie4}`}
						className='absolute top-0 right-0  capitalize'>
						{data[4]?.serie}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ObraMenu
