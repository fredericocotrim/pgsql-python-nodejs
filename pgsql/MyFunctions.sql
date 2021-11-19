
--drop extension if exists plpython3u cascade;
--create extension plpython3u;

drop function if exists fnc_python_nodejs(module text, arguments text);

create or replace function fnc_python_nodejs(module text, arguments text default null) returns text as
$$

  from MyFunctions import py_node

  argumentsAux = str(arguments or '')
  
  #plpy.notice(module)
  #plpy.notice(arguments)
  #plpy.notice(argumentsAux)
  
  return py_node(module, argumentsAux)

$$
language plpython3u;

go

select
  fnc_python_nodejs(
    'httpClient',
    jsonb_build_object(
        'method', 'get',
        'url', 'https://brasilapi.com.br/api/cep/v2/14781750'
      )::text
  );