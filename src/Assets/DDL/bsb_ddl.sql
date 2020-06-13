use bsbdev;

-- table for user information
create table user
( login_alias varchar(256) not null, -- 100 characters at most
status char(1), -- P:Pending...for activation A:Active L:Locked...fail login 3 times, D:Disabled...by someone, R:Removed...someone want out
-- at least 8 characters, 1 digit, 1 symbol, 1 capital letter, cannot repeat last 20, cannot same as alias, 
pwd varchar(256) not null, 
salt varchar(256) not null,
user_id int not null auto_increment,
name varchar(256) not null,
email varchar(256) not null,
activation_hash varchar(256) not null,
last_update_on timestamp not null,
primary key (user_id)
);
alter table user auto_increment=10000;
-- index for user
create unique index user_idx_unique on user
( login_alias);
create index user_idx_1 on user
( user_id);
create index user_idx_2 on user
( login_alias);
-- history for table user
create table user_history
( login_alias varchar(256) not null,
pwd varchar(256) not null,
salt varchar(256) not null,
user_id int not null,
name varchar(256) not null,
email varchar(256) not null,
last_update_on timestamp not null
);
-- index for user_history
create index user_history_idx1 on user_history
(login_alias, last_update_on);

-- table for logon history
create table logon_history
( login_alias varchar(256) not null,
user_id int not null,
login_result char(1) not null, -- S:Success, F:Fail
login_error_code varchar(256), -- error code, if any
fail_count smallint not null default 0,
device varchar(256) not null,
browser varchar(256) not null,
logon_time timestamp not null
);
-- index for logon_history
create index logon_history_idx1 on logon_history
( login_alias, logon_time);
alter table logon_history add constraint fk_user_id foreign key (user_id) 
	references user (user_id) on delete restrict on update restrict;

-- table for shop
create table shop
( shop_id int not null auto_increment,
status char(1) not null, -- A:Active, D:Disabled, R:Removed, 
name varchar(256) not null,
details text,
owner_user_id int not null,
last_update_by int not null,
last_update_on timestamp not null,
primary key (shop_id)
);
alter table shop auto_increment 10000;
-- index for shop
create index shop_idx_1 on shop
( owner_user_id, shop_id);
create index shop_idx_2 on shop
( shop_id);
-- table for shop history
create table shop_history
( shop_id int not null,
status char(1),
name varchar(256) not null,
details text,
owner_user_id int not null,
last_update_by int not null,
last_update_on timestamp not null
);
-- index for shop_history
create index shop_history_idx_1 on shop_history
( owner_user_id, shop_id, last_update_on);

-- table for resource
create table resource 
( shop_id int not null,
resource_id int not null auto_increment,
status char(1) not null, -- A:Active, D:Disabled, R:Removed
name varchar(256) not null,
details text,
owner_user_id int not null,
last_update_by int not null,
last_update_on timestamp not null,
primary key (resource_id)
);
alter table resource auto_increment=10000;
-- index for resource
create index resource_idx_1 on resource
( shop_id, resource_id);
-- table for resource history
create table resource_history
( shop_id int not null,
resource_id int not null,
status char(1) not null,
owner_user_id int not null,
name varchar(256) not null,
details text,
last_update_by int not null,
last_update_on timestamp not null
);
-- index for resource history
create index resource_history_idx_1 on resource_history
( shop_id, resource_id, last_update_on);

--- table for resource rule
create table resource_rule
( shop_id int not null,
resource_id int not null,
rule_id int not null auto_increment,
owner_user_id int not null,
type char(1) not null, -- I: include, E: exclude
status char(1) not null, -- A: active, D: disabled, R:removed
start_date date not null,
end_date date not null, 
rule_1 varchar(10), -- D:Daily, W:Weekly, M:Monthly, Y:Yearly
rule_2 varchar(10), -- MON, TUE, WED, THU, FRI, SAT, SUN
rule_3 date, 
last_update_by int not null,
last_update_on timestamp not null,
primary key (rule_id)
);
alter table resource_rule auto_increment=10000;
-- index for resource rule
create index resource_rule_idx_1 on resource_rule
( shop_id, resource_id, rule_id);
-- table for resource rule history
create table resource_rule_history
( shop_id int not null,
resource_id int not null,
rule_id int not null,
owner_user_id int not null,
type char(1) not null, -- I:include, E:exclude
status char(1) not null, -- A:active, D:disabled, R:removed
start_date date not null,
end_date date not null, 
rule_1 varchar(10), -- D:Daily, W:Weekly, M:Monthly, Y:Yearly
rule_2 varchar(10), -- MON, TUE, WED, THU, FRI, SAT, SUN
rule_3 date,
rule_4_approver_id int, -- need route for approval
last_update_by int not null,
last_update_on timestamp not null
);
-- index for resource_rule_history
create index resource_rule_history_idx_1 on resource_rule_history
( shop_id, resource_id, rule_id, last_update_on);

-- table for booking
create table booking
( shop_id int not null,
resource_id int not null,
booking_id int not null auto_increment,
user_id int not null, -- who book the resource
start_date date not null,
start_time time not null,
end_date date not null,
end_time time not null,
status char(1), -- D:draft, P:submitted but pending, C:confirmed, R:rejected
last_update_by int not null,
last_update_on timestamp not null,
primary key (booking_id)
);
alter table booking auto_increment 10000;
-- index for booking
create index booking_idx_1 on booking
( shop_id, resource_id, booking_id);
create index booking_idx_2 on booking
( user_id, shop_id, resource_id, booking_id);
-- table for booking history
create table booking_history
( shop_id int not null,
resource_id int not null,
booking_id int not null,
user_id int not null,
start_date date not null,
start_time time not null,
end_date date not null,
end_time time not null,
status char(1), -- D:draft, P:pending, C:approved/confirmed, R:rejected
last_update_by int not null,
last_update_on timestamp not null
);
-- index for booking history
create index booking_history_idx_1 on booking_history
( shop_id, resource_id, booking_id, last_update_on);