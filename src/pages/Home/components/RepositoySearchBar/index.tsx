import * as zod from "zod";
import { RepositorySearchBarContainer, InputAndButtonWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { RepositoryContext } from "../../../../context/RepositoryContext";

const SearchFormValidationSchema = zod.object({
  repository: zod.string({ required_error: 'Campo requerido.' })
});

type SearchFormData = zod.infer<typeof SearchFormValidationSchema>;

export default function RepositorySearchBar() {

  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormValidationSchema),
    defaultValues: {
      repository: ''
    }
  })

  const { register, handleSubmit} = searchForm;

  const { setRepository } = useContext(RepositoryContext);

  function handleSearchForm({ repository }: SearchFormData) {
    console.log(repository)
    setRepository(repository);
  }
  
  return (
    <RepositorySearchBarContainer>
      <InputAndButtonWrapper>
        <h1>Pesquisar repositório</h1>
        <form onSubmit={handleSubmit(handleSearchForm)}>
          <input type="text" placeholder="e.g. t3-oss/create-t3-app" { ...register('repository') }/>
          <button type="submit">Pesquisar</button>
        </form>
      </InputAndButtonWrapper>
    </RepositorySearchBarContainer>
  )
}