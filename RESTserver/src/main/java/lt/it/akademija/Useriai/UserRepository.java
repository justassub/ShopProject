package lt.it.akademija.Useriai;

import lt.it.akademija.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("repoUsersDao")
public interface UserRepository extends JpaRepository<User,Long> {

    User save(User user);
    User findUserByNickname(String username);



}
