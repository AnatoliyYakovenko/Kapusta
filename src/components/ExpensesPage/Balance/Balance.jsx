import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { Link } from 'react-router-dom';
import BalanceModal from './BalanceModal';
import { useState } from 'react';

export const Balance = () => {
  const { transactions } = useTransactions();
  const { balance, isRefreshing } = useAuth();
  const [promptClose, setPromptClose] = useState(true);
  let disabled = transactions.incomes.length === 0 && balance === 0;
  const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    // console.log(value);
    dispatch(newBalance(value));
    resetForm();
    if (disabled) {
      setPromptClose(prev => !prev);
    }
  };

  const showReport = !window.location.href.endsWith('reports');

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };

  return (
    <BalanceContainer>
      {showReport ? (
        <Button type="text" className="reports">
          <Link to="/reports">
            Reports <Reports />
          </Link>
        </Button>
      ) : null}
      <Typography level={5} className="title">
        Balance:
      </Typography>
      <div>
        <Formik initialValues={{ newBalance: '' }} onSubmit={onSubmit}>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="newBalance">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder={`${balance}.00 UAH`}
                    // value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input"
                    // disabled={!disabled}
                    readOnly={!disabled}
                  />
                )}
              </Field>
                  {!isRefreshing && promptClose && balance === 0 && !disabled && (<BalanceModal onClose={toggleWindow}/>)}

              {disabled ? (
                <Button type="text" htmlType="submit" className="button">
                  Confirm
                </Button>
              ) : (
                <Button
                  type="text"
                  htmlType="submit"
                  disabled
                  className="button"
                >
                  Confirm
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </BalanceContainer>
  );
};
