import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { Link } from 'react-router-dom';

export const Balance = () => {
  const { transactions } = useTransactions();
  const { balance } = useAuth();
  let disabled = transactions.length === 0 && balance === 0;

  const dispatch = useDispatch();
  const onSubmit = (value, { resetForm }) => {
    // console.log(value);
    dispatch(newBalance(value));
    resetForm();
  };
  const showReport = !window.location.href.endsWith("reports");

  return (
    <BalanceContainer>
      <div className="centered-container">
        <Typography level={5} className="title">
          Balance:
        </Typography>
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
                    disabled={!disabled}
                  />
                )}
              </Field>
              {disabled ? (
                <Button type="text" htmlType="submit" className="button">
                  Confirm
                </Button>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
      {
        showReport ? <div className='report-btn'>
          <Button type="text" className="reports">
            <Link to='/reports'>Reports <Reports /></Link>
          </Button>
        </div> : null
      }

    </BalanceContainer>
  );
};
