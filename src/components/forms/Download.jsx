import Input from "antd/es/input";
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import Upload from "antd/es/upload";
import {message} from "antd";

const Download = ({setStep, setSkipForm, files, setFiles, filesLink, setFilesLink, fileIsUploading, setFileIsUploading}) => {
	const props = {
		name: 'file',
		action: '/ajax/send/save.php',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status === 'uploading') {
				setFileIsUploading(true)
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`);
				setFiles([...files, { name: info.file.name, url: info.file.response }])
			} else if (info.file.status === 'removed') {
				setFiles([...files].filter((el) => el.name !== info.file.name))
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		}
	};

	return (
		<div className="cp-download-form">
			<div className="cp-row">
				<div className="cp-title">Загрузка Макета</div>
				<div className="cp-text">Вы можете загрузить файлы с компьютера или указать ссылку на облако</div>
				<div className="cp-line">
					<Input
						placeholder='Ссылка на облако'
						value={filesLink}
						onChange={(e) => setFilesLink(e.target.value)}
					/>
				</div>
				<div className="cp-dl-wrap">
					<Upload {...props}>
						<Button className="with-arrow" type="primary">Выбрать файлы<IconButton/></Button>
					</Upload>
				</div>
				<div className="cp-actions">
					<div className="btn-white" onClick={() => {
						setSkipForm();
						setStep(0)
					}}><span className="mobHide">Вернуться&nbsp;</span><span>назад</span></div>
					<Button disabled={fileIsUploading} className="with-arrow" type="primary" onClick={() => {
						if (!fileIsUploading) setStep(2)
					}}>Далее<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Download;
