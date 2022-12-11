import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './Register.css';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*0-9)(?=.*[!@#$%]).{8,}$/;

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pass, setPass] = useState('');
	const [validPass, setValidPass] = useState(false);
	const [passFocus, setPassFocus] = useState(false);

	const [matchPass, setMatchPass] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PASS_REGEX.test(pass);
		console.log(result);
		console.log(pass);
		setValidPass(result);
		const match = pass === matchPass;
		setValidMatch(match);
	}, [pass, matchPass]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pass, matchPass]);

	return (
		<div className='register'>
			<p
				ref={errRef}
				className={errMsg ? 'errmsg' : 'offscreen'}
				aria-live="assertive"
			>
				{errMsg}{' '}
			</p>
			<h1>Register!</h1>
			<form>
				<label htmlFor="username">
					Username:
					<span className={validName ? 'valid' : 'hide'}>
						<CheckCircleOutlineRoundedIcon rx={{ color: 'green' }} />
					</span>
					<span className={validName || !user ? 'hide' : 'invalid'}>
						<ErrorOutlineRoundedIcon rx={{ color: 'maroon' }} />
					</span>
				</label>
				<input
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					requiered
					aria-invalid={validName ? 'false' : 'true'}
					aria-describedby="uidnote"
					onFocus={() => setUserFocus('true')}
					onBlur={() => setUserFocus('false')}
				/>
				<p
					id="uidnote"
					className={
						userFocus && user && !validName ? 'intructions' : 'offscreen'
					}
				>
					<InfoRoundedIcon />
					4 to 24 characters <br />
					Must begin with a letter <br />
					Letters, Numbers, and - _ only
				</p>

				<label htmlFor="password">
					Password:
					<span className={validPass ? 'valid' : 'hide'}>
						<CheckCircleOutlineRoundedIcon rx={{ color: 'green' }} />
					</span>
					<span className={validPass || !pass ? 'hide' : 'invalid'}>
						<ErrorOutlineRoundedIcon rx={{ color: 'maroon' }} />
					</span>
				</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPass(e.target.value)}
					required
					aria-invalid={validPass ? 'false' : 'true'}
					aria-describedby="passnote"
					onFocus={() => setPassFocus('true')}
					onBlur={() => setPassFocus('flase')}
				/>
				<p
					id="passnote"
					className={passFocus && !validPass ? 'instructions' : 'offscreen'}
				>
					<InfoRoundedIcon />
					8 to 24 characters <br />
					Must include uppercase and lowercase letters, a number, and special
					character <br />
					Allowed special character: <span aria-label="exclimation">!</span>{' '}
					<span aria-label="at">@</span> <span aria-label="pound">#</span>{' '}
					<span aria-label="dollar">$</span> <span aria-label="percent">%</span>
				</p>

        <label htmlFor="matchpass">
          Confirm Password:
          <span className={validMatch && matchPass ? 'valid' : 'hide'}>
            <CheckCircleOutlineRoundedIcon rx={{ color: 'green' }} />
          </span>
          <span className={validMatch || !matchPass ? 'hide' : 'invalid'}>
            <ErrorOutlineRoundedIcon rx={{ color: 'maroon' }} />
          </span>
        </label> 
        <input
          type='password'
          id='confirm_pass'
          onChange={(e) => setMatchPass(e.target.value)}
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describeid='matchnote'
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p id='matchnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
          <InfoRoundedIcon />
          Passwords must match
        </p>
			</form>
		</div>
	);
};

export default Register;
