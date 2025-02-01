import React, { FormEvent, useEffect, useState, useRef } from 'react'
import './index.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import { IWedding, IWeddingData } from '../../../interface'
import { createNewWedding, fetchUserWeddings, updateWedding } from '../../../endpoint/index.ts'
import { useAppDispatch, useAppSelector } from '../../../store/index.ts'
import { useNavigate } from 'react-router-dom'
import { setUserWeddings } from '../../../store/userSlice.ts'
import { FaSortUp, FaSortDown } from 'react-icons/fa'
import { getPartnerName } from '../../../helpers/index.tsx'

const AdminTable : React.FC = () => {
	const { userData, userWeddings, users } = useAppSelector(({ userData }) => userData)
	const dispatch = useAppDispatch()
	const [showAddModal, setShowAddModal] = useState<boolean>(false)
	const [showEditModal, setShowEditModal] = useState<boolean>(false)
	const [editWeddingId, setEditWeddingId] = useState<string>('')
	const [sortConfig, setSortConfig] = useState<{ key: keyof IWeddingData | null, direction: 'asc' | 'desc' }>({
		key: null,
		direction: 'asc'
	})

	const editForm = useRef<HTMLFormElement>(null)

	const navigate = useNavigate()

	const handleCloseAddWeddingModal = () => setShowAddModal(false)
	const handleShowAddWeddingModal = () => setShowAddModal(true)

	const handleCloseEditModal = () => setShowEditModal(false)
	const handleShowEditModal = () => setShowEditModal(true)

	useEffect(() => {
		getUserWeddings()
	}, [])

	const getPackage = (option: '1' | '2' | '3') => {
		let packageOptions : {
      maxUsers: number,
      imageLimit: number,
      videoAvailable: boolean
    } | null

		switch (option) {
			case '1':
				packageOptions = {
					maxUsers: 100,
					imageLimit: 20,
					videoAvailable: false
				}
				break
			case '2':
				packageOptions = {
					maxUsers: 200,
					imageLimit: 20,
					videoAvailable: false
				}
				break
			case '3':
				packageOptions = {
					maxUsers: 350,
					imageLimit: 30,
					videoAvailable: false
				}
				break
			default:
				packageOptions = null
				break
		}

		return packageOptions
	}

	const createWedding = (event: FormEvent) => {
		event.preventDefault()
		let weddingData: IWeddingData | null = null
		let wedding: IWedding | null = null

		const formData = new FormData(event.currentTarget as HTMLFormElement)
		const packageOption = formData.get('packageOption') as '1' | '2' | '3'
		// Check for required fields
		const brideName = formData.get('brideName') as string
		const groomName = formData.get('groomName') as string
		const dateStartString = formData.get('dateStart') as string
		const futureSurname = formData.get('futureSurname') as string

		const packageData = getPackage(packageOption)

		const dateStart = new Date(dateStartString)
		dateStart.setHours(0, 0, 0, 0)

		const dateEnd = new Date(dateStart.getTime() + 48 * 60 * 60 * 1000)

		if (packageData) {
			const databaseName = `${dateStart.getDate()}.${dateStart.getMonth() + 1}.${dateStart.getFullYear()}-${formData.get('brideName')}&${formData.get('groomName')}`
			weddingData = {
				brideName,
				groomName,
				dateStart,
				surname: futureSurname,
				imageLimit: packageData.imageLimit,
				database: databaseName,
				videoAvailable: packageData.videoAvailable,
				dateEnd
			}

			wedding = {
				id: databaseName,
				currentUsers: 0,
				maxUsers: packageData.maxUsers,
				weddingPin: Date.now().toString().substring(5),
				data: weddingData,
				createdBy: userData!.id,
				packageOption
			}

			alert('Wedding created successfully')
			handleCloseAddWeddingModal()
			createNewWedding(wedding)
		}
	}

	const editWedding = async (event: FormEvent) => {
		event.preventDefault()
		let weddingData: IWeddingData | null = null
		let wedding: IWedding | any = null

		const formData = new FormData(event.currentTarget as HTMLFormElement)
		const packageOption = formData.get('packageOption') as '1' | '2' | '3'
		// Check for required fields
		const brideName = formData.get('brideName') as string
		const groomName = formData.get('groomName') as string
		const dateStartString = formData.get('dateStart') as string
		const futureSurname = formData.get('futureSurname') as string

		const packageData = getPackage(packageOption)

		const dateStart = new Date(dateStartString)
		dateStart.setHours(0, 0, 0, 0)

		const dateEnd = new Date(dateStart.getTime() + 48 * 60 * 60 * 1000)

		if (packageData) {
			const databaseName = `${dateStart.getDate()}.${dateStart.getMonth() + 1}.${dateStart.getFullYear()}-${formData.get('brideName')}&${formData.get('groomName')}`
			weddingData = {
				brideName,
				groomName,
				dateStart,
				surname: futureSurname,
				imageLimit: packageData.imageLimit,
				database: databaseName,
				videoAvailable: packageData.videoAvailable,
				dateEnd
			}

			wedding = {
				id: editWeddingId,
				maxUsers: packageData.maxUsers,
				data: weddingData,
				editedBy: userData!.id,
				editedAt: new Date()
			}

			alert('Vjenčanje uspješno spremljeno')
			handleCloseEditModal()
			await updateWedding(wedding)
			window.location.reload()
		}
	}

	const getOption = (wedding: IWedding) => {
		switch (wedding.maxUsers) {
			case 100:
				return '1'
			case 200:
				return '2'
			case 350:
				return '3'
			default:
				return '0'
		}
	}

	const populateWeddingModal = (wedding: IWedding) => {
		// const wedding: IWedding | null = null

		setEditWeddingId(wedding.id)

		const brideName = editForm.current?.elements.namedItem('brideName') as HTMLInputElement
		const groomName = editForm.current?.elements.namedItem('groomName') as HTMLInputElement
		const dateStart = editForm.current?.elements.namedItem('dateStart') as HTMLInputElement
		const futureSurname = editForm.current?.elements.namedItem('futureSurname') as HTMLInputElement
		const packageOption = editForm.current?.elements.namedItem('packageOption') as HTMLInputElement

		// Format date to "YYYY-MM-DD" for date input
		const dateForInput = `${wedding!.data.dateStart.getFullYear()}-${String(wedding!.data.dateStart.getMonth() + 1).padStart(2, '0')}-${String(wedding!.data.dateStart.getDate()).padStart(2, '0')}`

		brideName.value = wedding?.data.brideName || ''
		groomName.value = wedding?.data.groomName || ''
		dateStart.value = dateForInput // Populate date input
		futureSurname.value = wedding?.data.surname || ''
		packageOption.value = getOption(wedding!)
	}

	const getUserWeddings = async () => {
		if (userData) {
			const weddings = await fetchUserWeddings(userData, true)

			dispatch(setUserWeddings(weddings))
			return
		}

		navigate('/admin')
	}

	const getBadgeType = (item: IWedding) => {
		const now = new Date()
		if (item.data.dateStart < now && item.data.dateEnd > now) {
			return <Badge bg='success'>Aktivno</Badge>
		}

		if (item.data.dateEnd < now) {
			return <Badge bg='danger'>Završeno</Badge>
		}

		return <Badge bg='warning'>Nadolazeće</Badge>
	}

	const handleSort = (key: keyof IWeddingData) => {
		let direction: 'asc' | 'desc' = 'desc'
		if (sortConfig.key === key && sortConfig.direction === 'desc') {
			direction = 'asc'
		}
		setSortConfig({ key, direction })
	}

	const sortedWeddings = [...userWeddings].sort((a, b) => {
		if (!sortConfig.key) return 0
		const aValue = a.data[sortConfig.key]
		const bValue = b.data[sortConfig.key]
		if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
		if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
		return 0
	})

	const getSortIndicator = (key: keyof IWeddingData) => {
		if (sortConfig.key === key) {
			return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />
		}
		return null
	}

	return (
		<section className='table-container'>
			<div className='wedding-table-header'>
				<h3>Moja vjenčanja</h3>
				<button type="button" className="btn btn-primary" data-mdb-ripple-init onClick={handleShowAddWeddingModal}>
					Novo vjenčanja
				</button>
			</div>
			<table className="table wedding-table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th className='text-center' onClick={() => handleSort('dateStart')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Datum vjenčanja {getSortIndicator('dateStart')}
							</span>
						</th>
						<th className='text-center' onClick={() => handleSort('brideName')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Ime mlade {getSortIndicator('brideName')}
							</span>
						</th>
						<th className='text-center' onClick={() => handleSort('groomName')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Ime mladoženje {getSortIndicator('groomName')}
							</span>
						</th>
						<th className='text-center' onClick={() => handleSort('surname')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Prezime {getSortIndicator('surname')}
							</span>
						</th>
						<th className='text-center'>Pin</th>
						<th className='text-center'>Trenutan broj gostiju</th>
						<th className='text-center'>Max broj gostiju</th>
						<th className='text-center' onClick={() => handleSort('imageLimit')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Broj slika po gostu {getSortIndicator('imageLimit')}
							</span>
						</th>
						<th className='text-center' onClick={() => handleSort('dateEnd')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Datum završetka
							</span>
						</th>
						<th className='text-center'>Omogućen video</th>
						<th className='text-center' onClick={() => handleSort('dateEnd')}>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								Status {getSortIndicator('dateEnd')}
							</span>
						</th>
						<th className='text-center'>Kreirao</th>
						<th className='text-center'></th>
					</tr>
				</thead>
				<tbody>
					{
						sortedWeddings.map((wedding, index) => (
							<tr key={index}>
								<td className='text-center'>{`${wedding.data.dateStart.getDate()}.${wedding.data.dateStart.getMonth() + 1}.${wedding.data.dateStart.getFullYear()}`}</td>
								<td className='text-center'>{wedding.data.brideName}</td>
								<td className='text-center'>{wedding.data.groomName}</td>
								<td className='text-center'>{wedding.data.surname}</td>
								<td className='text-center'>{wedding.weddingPin}</td>
								<td className='text-center'>{wedding.currentUsers}</td>
								<td className='text-center'>{wedding.maxUsers}</td>
								<td className='text-center'>{wedding.data.imageLimit}</td>
								<td className='text-center'>{`${wedding.data.dateEnd.getDate()}.${wedding.data.dateEnd.getMonth() + 1}.${wedding.data.dateEnd.getFullYear()}`}</td>
								<td className='text-center'>{wedding.data.videoAvailable ? 'Da' : 'Ne'}</td>
								<td className='text-center'>{getBadgeType(wedding)}</td>
								<td className='text-center'>{getPartnerName(users, wedding.createdBy)}</td>
								<td className='text-center'>
									<button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {
										handleShowEditModal()
										setTimeout(() => {
											populateWeddingModal(wedding)
										}, 200)
									}}>
										Uredi
									</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>

			<Modal className='new-wedding-modal' show={showAddModal} onHide={handleCloseAddWeddingModal}>
				<Form onSubmit={createWedding}>
					<Modal.Header closeButton>
						<Modal.Title>Novo vjenčanja</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="newWedding.ControlInput1">
							<Form.Label>Ime mlade</Form.Label>
							<Form.Control
								name='brideName'
								type='text'
								autoFocus
								required
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Ime mladoženje</Form.Label>
							<Form.Control
								type="text"
								required
								name='groomName'
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Datum vjenčanja</Form.Label>
							<Form.Control type="date"
								name='dateStart'
								required
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Buduće prezime</Form.Label>
							<Form.Control type="text" name='futureSurname' required />
						</Form.Group>

						<Form.Select aria-label="Default select example" name='packageOption' required>
							<option>Odaberi paket</option>
							<option value="1">Paket 1 (20 slika po gostu / 100 uzvanika) 59€</option>
							<option value="2">Paket 2 (20 slika po gostu / 200 uzvanika) 79€</option>
							<option value="3">Paket 2 (30 slika po gostu / 350 uzvanika) 99€</option>
						</Form.Select>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseAddWeddingModal}>
							Zatvori
						</Button>
						<Button variant="primary" type='submit'>
							Kreiraj
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>

			{/* EDIT WEDDING */}
			<Modal className='edit-wedding-modal' show={showEditModal} onHide={handleCloseEditModal}>
				<Form ref={editForm} id='edit-wedding-form' onSubmit={editWedding}>
					<Modal.Header closeButton>
						<Modal.Title>Uredi vjenčanje</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="populateWeddingModal.ControlInput1">
							<Form.Label>Ime mlade</Form.Label>
							<Form.Control
								name='brideName'
								type='text'
								autoFocus
								required
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Ime mladoženje</Form.Label>
							<Form.Control
								type="text"
								required
								name='groomName'
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Datum vjenčanja</Form.Label>
							<Form.Control type="date"
								name='dateStart'
								required
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Buduće prezime</Form.Label>
							<Form.Control type="text" name='futureSurname' required />
						</Form.Group>

						<Form.Select aria-label="Default select example" name='packageOption' required>
							<option>Odaberi paket</option>
							<option value="1">Paket 1 (20 slika po gostu / 100 uzvanika) 59€</option>
							<option value="2">Paket 2 (20 slika po gostu / 200 uzvanika) 79€</option>
							<option value="3">Paket 3 (30 slika po gostu / 350 uzvanika) 99€</option>
						</Form.Select>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseEditModal}>
							Zatvori
						</Button>
						<Button variant="primary" type='submit'>
							Spremi
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</section>
	)
}

export default AdminTable
