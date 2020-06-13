SELECT @@global.time_zone;
SET GLOBAL time_zone='+8:00';
show variables like '%time_zone%';

insert into user (login_alias, status, name, email, login_fail_account, pwd, salt)
	values ('iambenwoo02', 'A', 'Ben Woo Yahoo', 'iambenwoo02@yahoo.com.hk', 0, 'xx', 'xx');

update user set status = 'A' where user_id = 10001;

select * from user;

insert into shop (status, name, create_by, create_on, last_upd_by, last_upd_on)
	values ("A", "Shop 02", 10000, current_timestamp(), 10000, current_timestamp());

select * from shop;
    
insert into shop_user (shop_id, user_id, role)
	values (10001, 10000, "O");
    
select * from shop_user;
    
insert into resource (status, name, create_by, create_on, last_upd_by, last_upd_on)
	values ("A", "Resource 1", 10000, current_timestamp(), 10000, current_timestamp());
    
insert into shop_resource (shop_id, resource_id)
	values (10000, 10000);
    
select * from user_account;

insert into user_account (user_id, login_alias, status, login_fail_account, pwd, salt)
	values (10000, "iambenwoo", "A", 0, "pwd", "salt");
    
delete from user_account where user_id = 10000;